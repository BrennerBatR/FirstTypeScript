import { Schema, model ,Document} from 'mongoose'

interface UserInterface extends Document{
    email?: string,
    firstName?: string,
    lastName?: string,
    fullName(): string
}

const UserChema = new Schema({
    email: String,
    firstName: String,
    lastName: String
}, {
    timestamps: true
})


//exemplo
UserChema.methods.fullname = function() : string {
    return this.firstName + " " + this.lastName
}

export default model<UserInterface>('User', UserChema)