import { useState } from "react";
import ArkCombobox from "@packages/react/components/ArkCombobox";
import RadixDropdownMenu from "@packages/react/components/RadixDropdownMenu";

function App() {
  const comboboxItems = ["React", "Solid", "Vue"];
  const [comboboxSelections, setComboboxSelections] = useState(["React"]);

  function updateComboboxSelections(value: string[]) {
    setComboboxSelections(value);
  }

  const dropdownMenuItems = [
    { label: "New Tab", subItem: "⌘+T" },
    { label: "New Window", subItem: "⌘+N" },
    { label: "New Private Window", subItem: "⇧+⌘+N", disabled: true },
  ];

  return (
    <>
      <main className="flex flex-col gap-8 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-extrabold text-center text-blue-600">
          Welcome to React with TailwindCSS!
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-700">
              Ark UI Combobox
            </h2>
            <ArkCombobox
              label="Select framework"
              selections={comboboxSelections}
              items={comboboxItems}
              onChangeSelections={updateComboboxSelections}
            />
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-700">
              Radix UI DropdownMenu
            </h2>
            <RadixDropdownMenu items={dropdownMenuItems} label="open menu" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
