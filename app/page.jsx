import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_1/page";
// import Style from '../styles/globals'
export const metadata = {
  title: "Silver-Fly-Wings - Travel & Tour Agencies",
  description: "Silver-Fly-Wings - Travel & Tour Agencies",
};
  
export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
