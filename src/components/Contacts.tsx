import { Card } from './ui/card';
import { Pencil } from 'lucide-react';
import { appStore } from '@/Store/AppStore';


function Contacts() {
	const { contacts, setIsDialogOpen } = appStore();
	return (
		<div>
			{contacts.map(({ name, email, tel, id }) => (
				<Card
					className="shadow-lg"
					key={id}>
					<div className="flex items-center justify-between p-6">
						<div className="space-y-2">
							<h3 className="font-semibold text-lg">{name}</h3>
							<p className="text-gray-600">{tel}</p>
							<p className="text-gray-500 text-sm">{email}</p>
						</div>
						
						<Pencil
							size={20}
							className="cursor-pointer"
							onClick={() => setIsDialogOpen(true)}
						/>
					</div>
				</Card>
			))}
		</div>
	);
}

export default Contacts;
