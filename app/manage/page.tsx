import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, FileText, CreditCard, Settings, Users, Calendar } from "lucide-react"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function ManageRentalsPage() {
  return (
    <>
      <MainNav />
      <main className="bg-muted/20 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Manage Rentals</h1>
              <p className="text-muted-foreground">Manage your rental properties and tenants in one place</p>
            </div>
            <Button>Add New Property</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <Card className="md:col-span-1">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <Link
                    href="/manage"
                    className="flex items-center gap-2 p-2 rounded-md bg-primary/10 text-primary font-medium"
                  >
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/manage/properties"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                  >
                    <Building className="h-4 w-4" />
                    Properties
                  </Link>
                  <Link
                    href="/manage/tenants"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                  >
                    <Users className="h-4 w-4" />
                    Tenants
                  </Link>
                  <Link
                    href="/manage/leases"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                  >
                    <FileText className="h-4 w-4" />
                    Leases
                  </Link>
                  <Link
                    href="/manage/payments"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                  >
                    <CreditCard className="h-4 w-4" />
                    Payments
                  </Link>
                  <Link
                    href="/manage/maintenance"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                  >
                    <Settings className="h-4 w-4" />
                    Maintenance
                  </Link>
                  <Link
                    href="/manage/calendar"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground"
                  >
                    <Calendar className="h-4 w-4" />
                    Calendar
                  </Link>
                </nav>
              </CardContent>
            </Card>

            {/* Main Content */}
            <div className="md:col-span-3 space-y-6">
              {/* Overview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Properties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Occupied Units</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">10</div>
                    <p className="text-xs text-muted-foreground">83% occupancy rate</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Vacant Units</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$15,200</div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity & Tasks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates from your properties</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                      <p className="font-medium">Rent Payment Received</p>
                      <p className="text-sm text-muted-foreground">42 Ocean View, Unit 3B - $1,450</p>
                      <p className="text-xs text-muted-foreground">Today, 9:32 AM</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4 py-2">
                      <p className="font-medium">Maintenance Request</p>
                      <p className="text-sm text-muted-foreground">33 Beach Road - Plumbing issue reported</p>
                      <p className="text-xs text-muted-foreground">Yesterday, 4:15 PM</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <p className="font-medium">Lease Signed</p>
                      <p className="text-sm text-muted-foreground">15 Harbour View, Unit 7A - New tenant</p>
                      <p className="text-xs text-muted-foreground">Mar 18, 2025</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Tasks</CardTitle>
                    <CardDescription>Things that need your attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <div>
                          <p className="font-medium">Property Inspection</p>
                          <p className="text-sm text-muted-foreground">33 Beach Road</p>
                          <p className="text-xs text-muted-foreground">Due: Mar 25, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <div>
                          <p className="font-medium">Lease Renewal</p>
                          <p className="text-sm text-muted-foreground">42 Ocean View, Unit 3B</p>
                          <p className="text-xs text-muted-foreground">Due: Apr 1, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" className="mt-1" />
                        <div>
                          <p className="font-medium">Maintenance Follow-up</p>
                          <p className="text-sm text-muted-foreground">15 Harbour View, Unit 7A</p>
                          <p className="text-xs text-muted-foreground">Due: Mar 22, 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Add Task</Button>
                    <Button variant="outline">View All</Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Tenant Applications */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Latest tenant applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 font-medium">Applicant</th>
                          <th className="text-left py-3 px-2 font-medium">Property</th>
                          <th className="text-left py-3 px-2 font-medium">Date</th>
                          <th className="text-left py-3 px-2 font-medium">Status</th>
                          <th className="text-left py-3 px-2 font-medium">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-2">John Smith</td>
                          <td className="py-3 px-2">42 Ocean View, Unit 2A</td>
                          <td className="py-3 px-2">Mar 19, 2025</td>
                          <td className="py-3 px-2">
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                              Pending
                            </span>
                          </td>
                          <td className="py-3 px-2">
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-2">Emily Johnson</td>
                          <td className="py-3 px-2">33 Beach Road</td>
                          <td className="py-3 px-2">Mar 18, 2025</td>
                          <td className="py-3 px-2">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Approved</span>
                          </td>
                          <td className="py-3 px-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Michael Brown</td>
                          <td className="py-3 px-2">15 Harbour View, Unit 5C</td>
                          <td className="py-3 px-2">Mar 17, 2025</td>
                          <td className="py-3 px-2">
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Rejected</span>
                          </td>
                          <td className="py-3 px-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Applications
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

