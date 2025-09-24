"use client";
import { useSelector } from "react-redux";
import { CvSummaryModal } from "./modals/CvSummaryModal";
import { currentOpenModalSelector } from "@/store/appSlice";
import { useOpenModal } from "./useOpenModal";
import { TechnicalSkillsModal } from "./modals/TechnicalSkillsModal";

export const ReduxModalsContainer: React.FC = () => {
  const currentOpenModal = useSelector(currentOpenModalSelector);
  const { closeModal } = useOpenModal("cvSummary");

  return (
    <>
      {currentOpenModal === "cvSummary" && (
        <CvSummaryModal
          open={currentOpenModal === "cvSummary"}
          onClose={closeModal}
        />
      )}

      {currentOpenModal === "skills" && (
        <TechnicalSkillsModal
          open={currentOpenModal === "skills"}
          onClose={closeModal}
        />
      )}
    </>
  );
};
