function SignUp(props) {
return (
  <div style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center', 
      width: '100%', height: '100vh'
      }}>
      <form style={{ display: 'flex', flexDirection: 'column'}}
         
      >
          <label>ID</label>
          <input type='id' />
          <label>Name</label>
          <input type='text'  />
          <label>Password</label>
          <input type='password' />
          <label>Confirm Password</label>
          <input type='password' />
          <br />
          <button formAction=''>
              회원가입
          </button>
      </form>
  </div>
)
}

export default SignUp;