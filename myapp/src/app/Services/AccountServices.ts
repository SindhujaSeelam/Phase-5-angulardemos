export class AccountServices{
    accounts=[]
    addAccount(name:string,status:string){
        this.accounts.push({
            name:name,
            status:status,
        });

    }
    updatestatus(id:number,newStatus:string){
        this.accounts[id].status=newStatus;
    }
    ondelete(id :number){
        this.accounts.splice(id,1)
    }
}