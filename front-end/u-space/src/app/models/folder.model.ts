import { VirtualFile } from './file.model';

export interface Folder{
  uuid?:string,
  name?:string,
  files?: Array<VirtualFile>;
  folder?:Array<Folder>;
  volume?:string,
  createDate?:string,
  owner?:string,
    // PATH Implentation will be update
}
export interface Section {
  name: string;
  }
