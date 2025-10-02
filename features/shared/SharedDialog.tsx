import {
  Button,
  CloseButton,
  Dialog,
  DialogRootProps,
  Portal,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface SharedDialogProps extends Omit<DialogRootProps, "children"> {
  title?: string;
  children?: ReactNode;
  onClose: () => void;
}

export const SharedDialog: React.FC<SharedDialogProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(details) => !details.open && onClose()}
    >
      <Portal>
        <Dialog.Backdrop bg="black" />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              {title && <Dialog.Title>{title}</Dialog.Title>}
            </Dialog.Header>
            <Dialog.Body>{children}</Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">close</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={onClose} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
