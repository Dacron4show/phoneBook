import { Button } from './ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function AddContacts() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Add Contact</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Contact Details</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label
							htmlFor="name"
							className="text-right">
							Name
						</Label>
						<Input
							id="name"
							type="name"
							placeholder="Pedro Duarte"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label
							htmlFor="email"
							className="text-right">
							Email
						</Label>
						<Input
							type="email"
							id="email"
							placeholder="pedro@gmail.com"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label
							htmlFor="tel"
							className="text-right">
							Phone Number
						</Label>
						<Input
							type="tel"
							id="tel"
							placeholder="09041941922"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button
							type="button"
							variant="secondary">
							Save Contact
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
