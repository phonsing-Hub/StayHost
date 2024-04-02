const db = require('../db'); // Assuming db is properly configured

const postUsersForSidebar = async (req, res) => {
    const { username, password } = req.body ?? {};

    try {
        if (username && password) {
            // Using parameterized query to prevent SQL injection
            const somePost = await db
                .select()
                .from('Admin')
                .where({
                    username: username,
                    password: password
                });
            const userData = somePost[0];

            if (userData) {
                res.json(userData);
            } else {
                throw new Error('User not found');
            }
        } else {
            throw new Error('Missing username or password');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
		const err = {
			username: null
		}
        res.json(err);
    }
};

const getUsersForSidebar = async (req, res) => {

    try {
        
            // Using parameterized query to prevent SQL injection
            const somePost = await db
                .select()
                .from('Account')
                
            const userData = somePost;

            if (userData) {
                res.json(userData);
            } else {
                throw new Error('User not found');
            }
       
    } catch (error) {
        console.error('Error fetching user data:', error);
		const err = {
			username: null
		}
        res.json(err);
    }
};

const getUser = async (req, res) => {
    try {
        // Execute the SQL query using Knex
        const users = await db
            .select(
                'IDCard',
                'Firstname',
                'Lastname',
                'Birthdate',
                db.raw('TIMESTAMPDIFF(YEAR, Birthdate, CURDATE()) AS Age'),
                'Gender',
                'Address',
                'PhoneNumber'
            )
            .from('Users');

        // Return the fetched users as JSON response
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    postUsersForSidebar,
    getUsersForSidebar,
    getUser
};
