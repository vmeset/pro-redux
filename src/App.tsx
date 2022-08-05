import React, { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

const App = () => {

  const {count} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if(isLoading) {
    return <h1>loading</h1>
  }
  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        <PostContainer />
        <PostContainer2 />
      </div>
      <div>
        {users.map(user =>
          <div key={user.id}>{user.name}</div>
        )}
      </div>
    </div>
  );
};

export default App;