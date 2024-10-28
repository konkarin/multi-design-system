import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { DropdownMenuStyle } from "@packages/common/DropdowmnMenu/style";
import type { DropdownMenuProps } from "@packages/common/DropdowmnMenu/type";

const DropdownMenuDemo = ({ items, label }: DropdownMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={DropdownMenuStyle.Trigger} aria-label={label}>
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={DropdownMenuStyle.MenuContent}
          sideOffset={5}
        >
          {items.map((item) => (
            <DropdownMenu.Item
              key={item.label}
              className={DropdownMenuStyle.MenuItem}
              disabled={item.disabled}
            >
              {item.label}
              {item.subItem && (
                <div className={DropdownMenuStyle.MenuSubItem}>
                  {item.subItem}
                </div>
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
