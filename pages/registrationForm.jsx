import { useState } from "react"
import { ErrorBoundary } from "react-error-boundary";

export default function RegistrationForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isSame, setIsSame] = useState(true)
  const [score, setScore] = useState(0)

  const handleSubmit = () => {
    if (!username.trim()) {
      alert(`You can't have an empty username`)
      return
    } else if (!password.trim() || !confirmPassword.trim()) {
      alert(`You can't have an empty password`)
      return
    }
    alert("Registered!")
  }

  const isFormValid = () => {
    return username.trim() && password.trim() && confirmPassword.trim()
  }

  const handleConfirmChange = (e) => {
    const newConfirmPassword = e.target.value
    setConfirmPassword(newConfirmPassword)
    setIsSame(password === newConfirmPassword)
  }

  const handlePasswordStrength = (e) => {
    let temp = 0;
    const currentPassword = e.target.value
    if (currentPassword.length > 8) temp=temp+4
    if (currentPassword.length >= 12) temp++
    if(currentPassword.length >= 16) temp++
    if (/[A-Z]/.test(currentPassword)) temp++
    if (/[^a-zA-Z0-9]/.test(currentPassword)) temp++
    if (/\d/.test(currentPassword)) temp++
    setPassword(currentPassword)
    setScore(temp)
  }

  return (
    <div>
    <ErrorBoundary
    fallback={<p>There was an error submitting the form!</p>}
    >
      <form action={handleSubmit}>
        <label>
          <span>username:</span>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          <span>password:</span>
          <input type="password" value={password} onChange={handlePasswordStrength} />
        </label>
        <div className="password-strength">
          {
            password.trim() && (
                <>
                  {score <= 4 && (<p className="weak-pword">weak password</p>)}
                  {score > 5 && score <= 7 && (<p className="moderate-pword">moderate password</p>)}
                  {score >= 8 && (<p className="strong-pword">strong password</p>)}
                </>
            )
          }
        </div>
        <br/>
        <label>
          <span>Confirm password:</span>
          <input 
            type="password"
            onChange={handleConfirmChange}
            value={confirmPassword}
            className={!isSame && confirmPassword ? "password-mismatch" : ""}
          />
        </label>
        {confirmPassword.trim() && !isSame && <p className="mismatch-pword">password-mismatch</p>}
        <br />
        <button type="submit" disabled={!isFormValid()}>Register</button>
      </form>
    </ErrorBoundary>
    </div>
  )
}