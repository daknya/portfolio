#include <stdio.h>

int main(void) {
	// your code goes here
	int T,
	scanf("%d", &T);
	
	for(int i =0 ; i<= T;i++){
	    int X;
	    scanf("%d", &X);
	    
	    if(X >= 2000 ){
	        printf("yes");
	    }
	    else{
	        printf("no");
	    }
	    
	}
	return 0;
}

