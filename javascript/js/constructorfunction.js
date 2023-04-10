function empDetails(ename,id,loc) {
    this.ename = ename;
    this.id = id;
    this.loc= loc;

}
const e1= new empDetails(`rajesh`,2,`banglore`)
// console.log(e1)
e1.ename= `mani`;
console.log(e1);
const e2= new empDetails(`rajesh`,2,`chennai`)
console.log(e2);



