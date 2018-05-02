function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];
       
	   if (listA === null ||  listB === null) {
	   		return null;
	   }

	   for (var i = 0; i < listA.length; i++) {
	   	var nextValue = listA[i];

	   	for (var j = 0; j < listB.length; j++) {
	   		if (listB[j] === nextValue) {
	   			 resultList.push(listB[j]);
	   			break;
			}
		}
	   }
       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];

        if (listA === null ||  listB === null) {
            return null;
        }

        resultList = listA;
        listB.forEach(item => {
        	if(!resultList.includes(item)) {
        		resultList.push(item);
			}
		});
	   
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];

        if (listA === null ||  listB === null) {
            return null;
        }

        listA.forEach(item => {
        	if(!listB.includes(item)) {
        		resultList.push(item)
			}
		})

	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];
	   var a = [];
	   var b = [];

        if (listA === null ||  listB === null) {
            return null;
        }

        listA.forEach(item => {
            if(!listB.includes(item)) {
                a.push(item)
            }
        });

        listB.forEach(item => {
            if(!listA.includes(item)) {
                b.push(item)
            }
        })

        resultList = a.concat(b);

	   return resultList;
	}	
	

}
