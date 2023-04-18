import bcrypt from 'bcrypt';

const users = [
  {
    email: 'admin@test.com',
    password: bcrypt.hashSync('admin123', 10),
    phoneNumber: '11999999999',
    firstName: 'Admin',
    lastName: 'Test',
    type: 'admin',
  },
  {
    email: 'client@test.com',
    password: bcrypt.hashSync('client123', 10),
    phoneNumber: '11988888888',
    firstName: 'Client',
    lastName: 'Test',
    type: 'cliente',
  },
  {
    email: 'tech@test.com',
    password: bcrypt.hashSync('tech123', 10),
    phoneNumber: '11977777777',
    firstName: 'Tech',
    lastName: 'Test',
    type: 'tecnico',
  },
];

users.forEach(user => {
  user.phoneNumber = user.phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', users);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};