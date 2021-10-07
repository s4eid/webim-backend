const projectsResolver = {
  Query: {
    async projects(parent, args, { pool }) {
      try {
        const data = await pool.query("SELECT * FROM projects");
        return data.rows;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { projectsResolver };
