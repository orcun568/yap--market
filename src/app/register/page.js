import Navbar from '../../../components/Navbar';
import RegisterPage from "../../../components/RegisterForm"; // Login formunu ayrı komponent olarak çağırıyoruz


export const metadata = {
  title: "Işık Yap Kayıt Ol",
};
export default async function Login() {

  return (
    <>
      <Navbar />
      <RegisterPage />
      
    </>
  );
}

