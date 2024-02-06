import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({ query, currentPage }: { query: string, currentPage: number }) {
    const invoices = await fetchFilteredInvoices(query, currentPage);

    return (
        <div className='mt-6 flow-root'>
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {invoices?.map((invoice) => (
                            <div key={invoice.id}
                                className='mb-2 w-full rounded-md bg-white p-4'>
                                <div className='flex items-center justify-between border-b pb-4'>
                                    <div className='mb-2 flex items-center'>
                                        <Image
                                            src={invoice.image_url}
                                            className='mr-2 rounded-full'
                                            width={28}
                                            height={28}
                                            alt={`${invoice.name}'s profile picture`} />
                                    </div>
                                    <p>{invoice.name}</p>
                                    <p className='text-sm text-gray-500'>{invoice.email}</p>
                                    <InvoiceStatus status={invoice.status} />
                                </div>
                                <div className='flex w-full items-center justify-between pt-4'>
                                    <p className='text-xl font-medium'>{formatCurrency(invoice.amount)}</p>
                                    <p>{formatDateToLocal(invoice.date)}</p>
                                    <div className="flex justify-end gap-2">
                                        <UpdateInvoice id={invoice.id} />
                                        <DeleteInvoice id={invoice.id} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}