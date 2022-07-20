import React, { FC, useContext, useEffect } from 'react';
import { Context } from '.';
import LoginForm from './components/loginForm'
import {observer} from 'mobx-react-lite'

const App: FC = () => {
  const {store} = useContext(Context)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth()
    }
  }, [])

  if (store.isLoading){
    return(
      <h1>Загрузка...</h1>
    )
  }

  if (!store.isAuth){
    return(
      <LoginForm />
    )
  }

  return (
    <>
      <h1>{store.isAuth ? `Пользователь ${store.user.email} авторизован` : 'Авторизуйтесь!'}</h1>
      <button onClick={() => store.logout()}>Выйти</button>
    </>
  );
}

export default observer(App);
