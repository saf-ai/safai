import pandas as pd
import sklearn
x=pd.read_json('data.json')
import matplotlib.pyplot as plt
#%matplotlib inline
#plt.scatter(x[:,0],x[:,1])
#plt.scatter(x.latitude, x.longitude)
y=x.drop('severity',axis=1)
from sklearn.cluster import KMeans
kmeans=KMeans(n_clusters=2).fit(y)
#plt.scatter(x.latitude, x.longitude,c=kmeans.labels_)