import { AsyncStorage } from 'react-native';

// ฟังก์ชันเพื่อตรวจสอบการเข้าสู่ระบบ
const checkLoginStatus = async () => {
  try {
    const userID = await AsyncStorage.getItem('userID');
    // ถ้ามี ID ของผู้ใช้แสดงว่าผู้ใช้ได้เข้าสู่ระบบแล้ว
    if (userID) {
      // เปลี่ยนเส้นทางไปยังหน้าหลักหรือหน้าที่ต้องการ
      router.navigate('/dashboard');
    } else {
      // ถ้ายังไม่ได้เข้าสู่ระบบ ให้เปลี่ยนเส้นทางไปยังหน้า Login
      router.navigate('/login');
    }
  } catch (error) {
    console.error('Error checking login status:', error);
  }
};
