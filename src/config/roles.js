const allRoles = {
  user: ['productListManagement'],
  admin: ['getUsers', 'manageUsers', 'productListManagement'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
