const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let memberArr = members.reduce((array, member, i) => {
    if (typeof member === 'string' && /\s*[a-zA-Z]+.*/.test(member)) {
      array.push(member.trim()[0].toUpperCase());
    }

    if (i === members.length - 1 && !array.length) {
      return false;
    }

    return array;
  }, [])

  return memberArr?.sort().join('') || false;
}

module.exports = {
  createDreamTeam
};
