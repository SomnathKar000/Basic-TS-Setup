import { hasPermission, User, Permission } from "./auth.roleBaseModel";

const user: User = { id: "12121", role: "admin" };
const permission: Permission = "create: comments";

console.log(hasPermission(user, permission));
