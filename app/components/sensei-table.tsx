import {
  Tabs,
  Tab,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import data from "@/app/data/sensei.json";

export default function SenseiTable() {
  return (
    <Tabs aria-label="tabs" size="sm" className="flex">
      <Tab title="Instruction">
        <Table removeWrapper layout="fixed">
          <TableHeader>
            <TableColumn>Role</TableColumn>
            <TableColumn className="hidden lg:table-cell">Dojo</TableColumn>
            <TableColumn>Year</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <dl className="lg:hidden font-normal">
                  <dt className="sr-only">Dojo</dt>
                  <dd className="text-gray-500 mt-1"></dd>
                </dl>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                Placeholder
              </TableCell>
              <TableCell>Placeholder</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Tab>
      <Tab title="Accolades"></Tab>
      <Tab title="Administration"></Tab>
    </Tabs>
  );
}
