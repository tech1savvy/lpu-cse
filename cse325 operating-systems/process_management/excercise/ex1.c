#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>

int main(){
	int n;
	printf("enter n: ");
	scanf("%d",&n);

	for(int i=0;i<n;i++){
		pid_t x = fork();
		if(x ==0)
			printf("child pid: %d and parrent ppid: %d\n",getpid(),getppid());
	}
}