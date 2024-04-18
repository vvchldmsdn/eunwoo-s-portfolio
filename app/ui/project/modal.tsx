import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { Do_Hyeon } from "next/font/google";

const dohyun = Do_Hyeon({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
});

export default function Modals({project, page, backgroundColor}: {project: string, page: string, backgroundColor: string}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  let buttonTextColor;
  switch (backgroundColor) {
    case 'red':
      buttonTextColor = 'text-backgroundColor'
      break;
    case 'green':
      buttonTextColor = 'text-backgroundColor'
      break;
    default:
      buttonTextColor = 'text-black'
  }
  
  return (
    <>
      <Button onPress={onOpen} variant="light" className={`${buttonTextColor} ${dohyun.className} text-2xl`}>{page}</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    
  )
}