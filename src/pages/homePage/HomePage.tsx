import Page from "@/components/page";
import Button from "@/components/button";
import Row from "@/components/row";
import { useConfirmContext } from "@/context/confirmContext/ConfirmContext.tsx";
import Confirm from "@/components/confirm";

function HomePage() {
  const confirm = useConfirmContext();

  const handleConfirm = async () => {
    const result = await confirm.handleConfirm(
      <Confirm>삭제 하시겠습니까?</Confirm>,
      false,
    );

    if (result) {
      console.log("삭제 완료");
    } else {
      console.log("삭제 취소");
    }
  };

  return (
    <Page>
      <h1 className="my-5 text-center text-4xl font-bold">
        Confirm with ContextAPI
      </h1>

      <Row>
        <Button onClick={handleConfirm}>Confirm Test</Button>
      </Row>
    </Page>
  );
}

export default HomePage;
