var sqlMap = {
    classify: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
        select_name: 'select * from classify',
        update_user: 'update user set'
    },
    all_classify: {
        select_name: function(id) {
            return 'select * from all_classify where type_id=' + id
        }
    },
    little_classify: {
        select_name: function(id) {
            return 'select * from little_classify where type_id=' + id
        }
    },
    user: {
        select_person: function(phoneNum, passwordNum) {
            return 'select * from user where phone=' + phoneNum + 'and password=' + passwordNum
        }
    }

}

module.exports = sqlMap;