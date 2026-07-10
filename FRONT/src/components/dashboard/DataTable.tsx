"use client";

import {
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"

import { Pencil, Eye, Trash2 } from "lucide-react"

const data = [
    {
        id: 1,
        name: "Jean Dupont",
        email: "jean@test.com",
        role: "Admin"
    },
    {
        id: 2,
        name: "Marie Martin",
        email: "marie@test.com",
        role: "User"
    }
]


const columns = [
    {
        accessorKey: "name",
        header: "Nom"
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "role",
        header: "Rôle"
    },
    {
        id: "actions",
        header: "Actions",

        cell: ({ row }: { row: any }) => {

            const user = row.original

            return (
                <div className="flex items-center gap-1">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => console.log("Voir", user)}
                    >
                        <Eye className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => console.log("Modifier", user)}
                    >
                        <Pencil className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => console.log("Supprimer", user)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            );
        }
    }
]


export default function DataTable() {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    })


    return (

        <Table>

            <TableHeader>

                {
                    table.getHeaderGroups().map(group => (

                        <TableRow key={group.id}>

                            {
                                group.headers.map(header => (

                                    <TableHead key={header.id}>

                                        {
                                            flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )
                                        }

                                    </TableHead>

                                ))
                            }

                        </TableRow>

                    ))
                }

            </TableHeader>


            <TableBody>

                {
                    table.getRowModel().rows.map(row => (

                        <TableRow key={row.id}>

                            {
                                row.getVisibleCells().map(cell => (

                                    <TableCell key={cell.id}>

                                        {
                                            flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )
                                        }

                                    </TableCell>

                                ))
                            }

                        </TableRow>

                    ))
                }

            </TableBody>

        </Table>

    )
}