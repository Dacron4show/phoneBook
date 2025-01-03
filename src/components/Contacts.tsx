import { Card } from "./ui/card";
import { Pencil } from "lucide-react";

function Contacts() {
  return (
    <div>
      <Card>
        <div className="flex items-center justify-between p-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-gray-600">08012345678</p>
            <p className="text-gray-500 text-sm">joe43@example.com</p>
          </div>
          <Pencil size={20} className="cursor-pointer" />
        </div>
      </Card>
    </div>
  );
}

export default Contacts;
