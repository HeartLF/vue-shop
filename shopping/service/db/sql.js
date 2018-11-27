var sqlMap = {
    classify: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
        select_name: 'select * from classify',
        update_user: 'update user set'
    }
}

module.exports = sqlMap;