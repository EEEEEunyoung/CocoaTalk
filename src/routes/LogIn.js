function LogIn(props) {
return (
  <div style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center', 
      width: '100%', height: '100vh'
      }}>
      <form style={{ display: 'flex', flexDirection: 'column'}}
         
      >
          <label>Id</label>
          <input type='id'  />
          <label>Password</label>
          <input type='password' />
          <br />
          <button formAction=''>
            로그인
          </button>
      </form>
  </div>
)
}

export default LogIn;