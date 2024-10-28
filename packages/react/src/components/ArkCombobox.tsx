import { Combobox, createListCollection } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { ComboboxStyles } from "@packages/common/Combobox/style";
import type { ComboboxProps } from "@packages/common/Combobox/type";

import { useMemo, useState } from "react";

interface Props extends ComboboxProps {
  onChangeSelections: (selections: string[]) => void;
}

export default function ArkCombobox({
  label,
  items,
  selections,
  onChangeSelections,
}: Props) {
  const [_items, setItems] = useState(items);

  const collection = useMemo(
    () => createListCollection({ items: _items }),
    [_items]
  );

  function updateItems(detailes: Combobox.InputValueChangeDetails) {
    setItems(
      items.filter((item) =>
        item.toLowerCase().includes(detailes.inputValue.toLowerCase())
      )
    );
  }
  function updateSelections(details: Combobox.ValueChangeDetails) {
    onChangeSelections(details.value);
  }
  function resetItems() {
    setItems(items);
  }

  return (
    <Combobox.Root
      defaultValue={selections}
      collection={collection}
      onInputValueChange={updateItems}
      onValueChange={updateSelections}
      className={ComboboxStyles.Root}
    >
      <Combobox.Label className={ComboboxStyles.Label}>{label}</Combobox.Label>
      <Combobox.Control className={ComboboxStyles.Control}>
        <Combobox.Input className={ComboboxStyles.Input} />
        <Combobox.Trigger
          aria-label="open"
          onClick={resetItems}
          className={ComboboxStyles.Trigger}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevrons-up-down"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </Combobox.Trigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content className={ComboboxStyles.Content}>
            <Combobox.ItemGroup>
              {collection.items.map((item) => (
                <Combobox.Item
                  key={item}
                  item={item}
                  className={ComboboxStyles.Item}
                >
                  <Combobox.ItemText className={ComboboxStyles.ItemText}>
                    {item}
                  </Combobox.ItemText>
                  {selections.includes(item) && (
                    <Combobox.ItemIndicator
                      className={ComboboxStyles.ItemIndicator}
                    >
                      ✓
                    </Combobox.ItemIndicator>
                  )}
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
}
