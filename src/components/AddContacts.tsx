// Suggested code may be subject to a license. Learn more: ~LicenseLog:3020059840.
import { appStore } from '@/Store/AppStore';
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
	const { addContact, email, name, tel, setName, setEmail, setTel, isDialogOpen, setIsDialogOpen } = appStore();

	
	

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<DialogTrigger asChild>
				<Button>Add Contact</Button>
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
							value={name}
							onChange={(e) => setName(e.target.value)}
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
							value={tel}
							onChange={(e) => setTel(e.target.value)}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button
							type="button"
							disabled={!(name && email && tel)}
							onClick={() => addContact(name, email, tel)}>
							Save Contact
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
