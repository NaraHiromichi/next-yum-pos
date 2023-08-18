import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { TagIcon } from "@heroicons/react/24/solid";
import { RectangleStackIcon } from "@heroicons/react/24/solid";
import { RectangleGroupIcon } from "@heroicons/react/24/solid";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

interface Props {
  name: string;
  icon: JSX.Element;
}

export function NaviCard(props: Props) {
  const { name, icon } = props;
  return (
    <Card className="mt-6 w-96 h-96 flex justify-center items-center bg-secondary hover:bg-spot text-white cursor-pointer transition ease-in-out  dusration-500">
      {icon}
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-center text-white"
        >
          {name}
        </Typography>
      </CardBody>
    </Card>
  );
}
