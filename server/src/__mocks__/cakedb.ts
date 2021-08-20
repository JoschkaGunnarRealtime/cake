export default class CakeDB  {
    public connectDB(): Promise<void> {
      console.log('Ich bin im Test');
      return new Promise((resolve) => {
        resolve();
      });
    }
    
    public getCake(index: number): Promise<any> {
      console.log('Ich bin im Test');
      return new Promise( (resolve) => {
          resolve({
              status: 200,
              success: true,
              data: {},
          });
      });
    }
  }
  