import { hasPermission, User, Permission } from "./auth.rolebasemodel";

const user: User = { id: "12121", role: "admin" };
const permission: Permission = "create: comments";

console.log(hasPermission(user, permission));
