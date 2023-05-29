import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState(""); // 이메일 상태값
    const [password, setPassword] = useState(""); // 비밀번호 상태값
    const [username, setUsername] = useState(""); // 사용자명 상태값
    const [error, setError] = useState(""); // 에러 메시지 상태값

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
        if (!email || !password || !username) {
            setError("Please fill in all fields."); // 필드가 비어있을 경우 에러 메시지 설정 후 종료
            return;
        }
        if (!isValidEmail(email)) {
            setError("Please enter a valid email address."); // 유효한 이메일 형식이 아닐 경우 에러 메시지 설정 후 종료
            return;
        }
        if (password.length < 8) {
            setError("Password should be at least 8 characters long."); // 비밀번호가 8자 미만일 경우 에러 메시지 설정 후 종료
            return;
        }
        if (username.includes(" ")) {
            setError("Username should not contain spaces."); // 사용자명에 공백이 포함되어 있을 경우 에러 메시지 설정 후 종료
            return;
        }
        setError(""); // 이전 에러 메시지 초기화
        console.log(`submit! Email: ${email} Password: ${password} Username: ${username}`);
        // 제출 시 로그에 이메일, 비밀번호, 사용자명 출력
    };

    const isValidEmail = (value) => {
        // 기본적인 이메일 유효성 검사 정규식 패턴
        const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        return emailRegex.test(value); // 입력된 값이 정규식 패턴과 일치하는지 확인하여 유효성 여부 반환
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="login-items">
                    <h1>E-mail</h1>
                    <input
                        name="email"
                        value={email}
                        placeholder="example@kangwon.ac.kr"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-items">
                    <h1>Password</h1>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="At least 8 characters"
                        onC
                        hange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="login-items">
                    <h1>Username</h1>
                    <input
                        name="username"
                        value={username}
                        placeholder="No space allowed"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {error ? <p className="error-message">{error}</p> : null}
                <input type="submit" value="가입하기" />
            </form>
        </div>
    );
}

export default Login;
