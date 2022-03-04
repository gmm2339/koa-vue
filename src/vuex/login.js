import Cookie from 'js-cookie';
let login = {
    namespaced: true,
    state: () => ({
    token: Cookie.get('token')
     }),
      mutations: {
            setToken (state,data)
          {
                state.token = data?.token || '';
                Cookie.set('token',data.token);
            },
            clearToken()
          {
                Cookie.set("token", "")
          }
     },
      actions: {

      },
      getters: {
      }
}
export default login
