import { Card } from './ui/card';
import { Pencil } from 'lucide-react';
import { appStore, type Contact } from '@/Store/AppStore';


function Contacts() {
	const { contacts, setIsDialogOpen, setName, setEmail, setTel, setEditingContactId } = appStore();

	const handleEdit = (contact: Contact) => {
		setName(contact.name);
		setEmail(contact.email);
		setTel(contact.tel);
		setEditingContactId(contact.id);
		setIsDialogOpen(true);
	  };
	return (
		<div>
			{contacts.map((contact) => (
				<Card
					className="shadow-lg"
					key={contact.id}>
					<div className="flex items-center justify-between p-6">
						<div className="space-y-2">
							<h3 className="font-semibold text-lg">{contact.name}</h3>
							<p className="text-gray-600">{contact.tel}</p>
							<p className="text-gray-500 text-sm">{contact.email}</p>
						</div>
						
						<Pencil
							size={20}
							className="cursor-pointer"
							onClick={() =>  handleEdit(contact)}
						/>
					</div>
				</Card>
			))}
		</div>
	);
}

export default Contacts;
