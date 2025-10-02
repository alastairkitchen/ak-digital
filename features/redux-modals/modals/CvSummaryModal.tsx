import { ComponentProps } from "react";
import { SharedDialog } from "../../shared";
import { Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { closeTextBox } from "@/store/appSlice";

export const CvSummaryModal: React.FC<ComponentProps<typeof SharedDialog>> = ({
  open,
  onClose,
}) => {
  const dispatch = useDispatch();

  const handleOnClose = () => {
    dispatch(closeTextBox());
    onClose();
  };

  return (
    <SharedDialog
      open={open}
      onClose={handleOnClose}
      title="Professional Summary"
    >
      <Text>
        A web developer with 9 years of experience in frontend development,
        specializing in React, Next.js, and modern JavaScript frameworks.
        Skilled in building, testing, and deploying scalable web applications in
        agile / scrum teams. Seeking to deepen my focus in frontend development,
        adopt new technologies, and advance my career in the field.
      </Text>
    </SharedDialog>
  );
};
