"use client";
import { useSelector } from "react-redux";
import { CvSummaryModal } from "./modals/CvSummaryModal";
import { currentOpenModalSelector } from "@/store/appSlice";
import { useOpenModal } from "./useOpenModal";
import { TechnicalSkillsModal } from "./modals/TechnicalSkillsModal";
import { ProfessionalExperienceModal } from "./modals/ProfessionalExperienceModal";
import { PersonalProjectsModal } from "./modals/PersonalProjectsModal";
import { EducationModal } from "./modals/EducationModal";

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

      {currentOpenModal === "experience" && (
        <ProfessionalExperienceModal
          open={currentOpenModal === "experience"}
          onClose={closeModal}
        />
      )}

      {currentOpenModal === "projects" && (
        <PersonalProjectsModal
          open={currentOpenModal === "projects"}
          onClose={closeModal}
        />
      )}
      {currentOpenModal === "education" && (
        <EducationModal
          open={currentOpenModal === "education"}
          onClose={closeModal}
        />
      )}
    </>
  );
};
