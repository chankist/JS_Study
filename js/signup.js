const form = document.getElementById("signupForm");


form.addEventListener("submit", function(event) {
    //사용자에게 입력 받은 데이터 제출을 막고 밑에서 자바스크립트로 유효성 검사
    event.preventDefault();//데이터 제출 동작 막기

    const userId = document.getElementById("userId").value.trim;
    const password = document.getElementById("password").value.trim; 
    const passwordCheck = document.getElementById("passwordCheck").value.trim; 
    const name = document.getElementById("name").value.trim; 
    const email = document.getElementById("email").value.trim; 
    
    let isValid = true;

     //이전 오류 메시지 지우기
    document.querySelectorAll(".error").forEach(function(element) {
        element.textContent = "";
    });

    //1.아이디 검사-영문 소문자와 숫자 4~12자
    
    const idPattern = /^[a-z0-9]{4,12}$/;

    if(!idPattern.test(userId)) {
        isValid = false;
        document.getElementById("userIdError").textContent = "아이디는 영어 소문자와 숫로 된 4~12자 사이만 가능합니다.";
        //alert("아이디는 영어 소문자와 숫로 된 4~12자 사이만 가능합니다.");
    }

    //2.비밀번호 검사-8자 이상 입력
    if(password.length <8){
        isvalid = false;
        document.getElementById("passwordError").textContent = "비밀번호는 8자 이상이어야 합니다.";
        //alert("비밀번호는 8자 이상이어야 합니다.");
    }

    //3.비밀번호 확인 검사
    if(passwordCheck != "") {
        isValid = false;
        document.getElementById("passwordCheckError").textContent = "비밀번호 확인이 공란입니다.";
        //alert("비밀번호 확인이 공란입니다.");
    } else if(passwordCheck != password) {
        isValid = false;
        document.getElementById("passwordCheckError").textContent = "비밀번호가 일치 하자 않습니다.";
       // alert("비밀번호가 틀립니다.");
    }

    //4.이름 검사 - 빈칸으로 입력되었는지 검사
    if(name != ""){
        isValid = false;
        document.getElementById("nameError").textContent = "이름이 공란입니다.";
        //alert("이름이 공란입니다.");
    }

    //5.이메일 검사-example@mail.com

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email != ""){
        isValid =false;
        document.getElementById("emailError").textContent = "이메일이 공란입니다.";
        //alert("이메일이 공란입니다.");
    } else if(!emailPattern.test(email)) {
        isValid = false;
        document.getElementById("emailError").textContent = "이메일 형식이 잘못되었습니다.";
    }

    //isValid 값이 true 면 제출
});