import React, { useState } from 'react';
import '../Mypage/Mypage.scss';
import LeftBar from '../../components/MyPage/LeftBar';
import MyPageTop from '../../components/MyPage/MyPageTop';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function MyPage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('내 정보');
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateProfile = () => {
    // 여기에 실제 회원정보 업데이트 로직을 추가하세요.
    // formData에는 입력된 정보가 들어 있습니다.
    console.log('Updated Profile:', formData);
  };

  const user = { name: '임헌성', spouse: '윈터', age: '25', phone: '000-0000-0000', bh: '1999-10-08' }
  const pay = { name: '임헌성', prodname:'A패키지', price: '1000만원', how:'카카오페이', map: '잠실점', memo: '화려하게 부탁드립니다' }
  const cons = { name: '임헌성', consname:'김준녕', day: '2023-11-16', prodname:'A패키지', memo: '웨딩카 벤츠로 부탁드립니다' }
  

  return (
    <div className="Mypage-container">
      <div className="my-backgrund">
        <MyPageTop />
      </div>
      <div className="sub-menu">
        <div className="my-both">
          <div className="left-list">
            <LeftBar onMenuClick={handleMenuClick} />
          </div>
          <div className="my-content">
            <h1>{selectedMenuItem}</h1>
            <div className="my-content-main">
              {selectedMenuItem === '내 정보' && (
                <>
                  <h2>이름 : {user.name}</h2>
                  <h2>배우자 이름 : {user.spouse}</h2>
                  <h2>나이 : {user.age}</h2>
                  <h2>전화번호 : {user.phone}</h2>
                  <h2>생일 : {user.bh}</h2>
                </>
              )}
              {selectedMenuItem === '내정보 수정' && (
                <form>
                  <Container maxWidth="xs">
                    <Box mt={3}>
                      <Typography variant="h5" align="center">
                        회원정보 수정
                      </Typography>
                    </Box>
                    <Box mt={2}>
                      <TextField fullWidth label="아이디" variant="outlined" required name="id" onChange={handleInputChange} />
                    </Box>
                    <Box mt={2}>
                      <TextField fullWidth label="비밀번호" variant="outlined" required type="password" name="password" onChange={handleInputChange} />
                    </Box>
                    <Box mt={2}>
                      <TextField fullWidth label="비밀번호 확인" variant="outlined" required type="password" name="confirmPassword" onChange={handleInputChange} />
                    </Box>
                    <Box mt={2}>
                      <TextField fullWidth label="이메일" variant="outlined" required type="email" name="email" onChange={handleInputChange} />
                    </Box>
                    <Box mt={2} mb={2}>
                      <Button fullWidth variant="contained" color="primary"  type="button" onClick={handleUpdateProfile}>
                        수정
                      </Button>
                    </Box>
                  </Container>
                </form>
              )}
              {selectedMenuItem === '결제 내역' && (
                <>
                  <h2>이름 : {pay.name}</h2>
                  <h2>상품 이름 : {pay.prodname}</h2>
                  <h2>가격 : {pay.price}</h2>
                  <h2>결혼식 장소 : {pay.map}</h2>
                  <h2>결제 방법 (신용카드, 계좌이체, 결제 앱 등) : {pay.how} </h2>
                  <h2>요청사항 : {pay.memo}</h2>
                </>
              )}
              {selectedMenuItem === '상담 예약 내역' && (
                <>
                  <h2>이름 : {cons.name}</h2>
                  <h2>상담사 이름 : {cons.consname}</h2>
                  <h2>상담 날짜 : {cons.day}</h2>
                  <h2>상품 이름 : {cons.prodname}</h2>
                  <h2>요청사항 : {cons.memo}</h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
