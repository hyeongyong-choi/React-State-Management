import React from 'react';
import { atom, selector, selectorFamily, useRecoilState, useRecoilValue, useRecoilValueLoadable, useResetRecoilState } from 'recoil';
import axios from 'axios'

const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: "1",
  });
  
const tableOfUsers = [{name:"jimmy"}, {name:"choi"}]

// const currentUserNameState = selector({
//     key: 'CurrentUserName',
//     get: ({get}) => {
//       return tableOfUsers[get(currentUserIDState)].name;
//     },
//   });
  
  const currentUserNameQuery = selectorFamily({
    key: 'CurrentUserName',
    get: (id) => async () => {
      const response = await axios.get(
        `/api/user-name?id=${id}`
      );
      console.log('response',response)
      return response.data.name;
    },
  });

const CurrentUser = () => {
    // const userName = useRecoilValue(currentUserNameQuery(1));
    // return (<div>{userName}</div>)
    const userName = useRecoilValueLoadable(currentUserNameQuery(1));
    if(userName.state === "loading"){
        return <div>loading ...</div>
    }
    if(userName.state === "hasError"){
        return <div>Something wrong</div>
    }
    return (<div>{userName.contents}</div>)
};

const CurrentUserInfo = () => {
    return(
    <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUser />
    </React.Suspense>
    )
}
export default CurrentUserInfo

