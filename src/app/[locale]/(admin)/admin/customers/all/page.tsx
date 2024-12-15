'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { Users, Package, Headphones, FileText, Eye, Pencil, Trash2, ChevronDown } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from '@/components/ui/checkbox'

interface Customer {
  id: string
  name: string
  avatar: string
  invoiceId: string
  status: 'completed' | 'cancel' | 'pending'
  totalAmount: number
  amountDue: number
  dueDate: Date
  paymentMethod: string
}

const customers: Customer[] = [
  {
    id: '1',
    name: 'Michael A. Miner',
    avatar: '/placeholder.svg',
    invoiceId: '#INV2540',
    status: 'completed',
    totalAmount: 4521,
    amountDue: 8901,
    dueDate: new Date('2023-01-07'),
    paymentMethod: 'Mastercard'
  },
  {
    id: '2',
    name: 'Theresa T. Brose',
    avatar: '/placeholder.svg',
    invoiceId: '#INV3924',
    status: 'cancel',
    totalAmount: 7836,
    amountDue: 9902,
    dueDate: new Date('2023-12-03'),
    paymentMethod: 'Visa'
  },
  {
    id: '3',
    name: 'James L. Erickson',
    avatar: '/placeholder.svg',
    invoiceId: '#INV5032',
    status: 'completed',
    totalAmount: 1347,
    amountDue: 6718,
    dueDate: new Date('2023-09-28'),
    paymentMethod: 'Paypal'
  },
  {
    id: '4',
    name: 'Lily W. Wilson',
    avatar: '/placeholder.svg',
    invoiceId: '#INV1695',
    status: 'pending',
    totalAmount: 9457,
    amountDue: 3928,
    dueDate: new Date('2023-08-10'),
    paymentMethod: 'Mastercard'
  },
  {
    id: '5',
    name: 'Sarah M. Brooks',
    avatar: '/placeholder.svg',
    invoiceId: '#INV8473',
    status: 'cancel',
    totalAmount: 4214,
    amountDue: 9814,
    dueDate: new Date('2023-05-22'),
    paymentMethod: 'Visa'
  },
  {
    id: '6',
    name: 'Joe K. Hall',
    avatar: '/placeholder.svg',
    invoiceId: '#INV2150',
    status: 'completed',
    totalAmount: 2513,
    amountDue: 5891,
    dueDate: new Date('2023-03-15'),
    paymentMethod: 'Paypal'
  },
  {
    id: '7',
    name: 'Ralph Hueber',
    avatar: '/placeholder.svg',
    invoiceId: '#INV5636',
    status: 'completed',
    totalAmount: 3103,
    amountDue: 8415,
    dueDate: new Date('2023-03-15'),
    paymentMethod: 'Visa'
  }
]

export default function CustomersPage() {
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([])

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">All Customers</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">+22.63k</h3>
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded">+34.4%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Package className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Orders</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">+4.5k</h3>
                <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded">-8.1%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Headphones className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Services Request</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">+1.03k</h3>
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded">+12.6%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Invoice & Payment</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">$38,908.00</h3>
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded">+45.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold">All Customers List</h2>
          <Select defaultValue="thisMonth">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="thisMonth">This Month</SelectItem>
              <SelectItem value="lastMonth">Last Month</SelectItem>
              <SelectItem value="thisYear">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>Customer Name</TableHead>
              <TableHead>Invoice ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Amount Due</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={customer.avatar} alt={customer.name} />
                      <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{customer.name}</span>
                  </div>
                </TableCell>
                <TableCell>{customer.invoiceId}</TableCell>
                <TableCell>
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "bg-opacity-20 capitalize",
                      {
                        "bg-green-100 text-green-700": customer.status === "completed",
                        "bg-red-100 text-red-700": customer.status === "cancel",
                        "bg-yellow-100 text-yellow-700": customer.status === "pending",
                      }
                    )}
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell>${customer.totalAmount.toLocaleString()}</TableCell>
                <TableCell>${customer.amountDue.toLocaleString()}</TableCell>
                <TableCell>{format(customer.dueDate, 'dd MMM, yyyy')}</TableCell>
                <TableCell>{customer.paymentMethod}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

