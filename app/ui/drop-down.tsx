import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { baseStyles, Button } from "@nextui-org/react";
import { MenuIcon } from "../lib/icons";
import Link from "next/link";

export default function MenuDropdown({ currPage }: { currPage: string }) {


  return (
    <>
      <Dropdown
        showArrow
        radius='sm'
        classNames={{
          base: "before: bg-defaul-200",
          content: "p-0 border-small border-divider bg-background"
        }}
      >
        <DropdownTrigger>
          <Button variant="ghost" disableRipple>Open Menu</Button>
          {/* <MenuIcon></MenuIcon> */}
        </DropdownTrigger>
        <DropdownMenu
          className="p-3 bg-backgroundColor"
          itemClasses={{
            base: [
              "rounded-md",
              "text-default-500",
              'transition-opacity',
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-homeYellow",
              "dark:data-[hover=true]:bg-homeYellow",
              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          }}
          disabledKeys={[currPage]}
        >
          <DropdownSection showDivider>
            <DropdownItem key="Home">
              <Link href=''>Home</Link>
            </DropdownItem>
            <DropdownItem key="About me">
              <Link href='/about-me'>About me</Link>
            </DropdownItem>
            <DropdownItem key="Projects">
              <Link href='/projects'>Projects</Link>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem>vvchldmsdn@naver.com</DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}